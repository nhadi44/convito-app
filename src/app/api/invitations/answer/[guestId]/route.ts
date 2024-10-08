import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: { guestId: string } }) {
   const body = await req.json();

   try {
      const updateAnswer = await Promise.all(
         body.map(async (data: any) => {
            const invitation = await prisma.invitations.findMany({
               select: {
                  id: true,
                  questionId: true,
               },
               where: {
                  guestId: Number(params.guestId),
                  questionId: Number(data.questionId),
               },
            });

            const update = await prisma.invitations.update({
               where: {
                  id: invitation[0].id,
               },
               data: {
                  answer: data.answer,
                  answerAt: new Date(),
               },
            });

            return {
               invitationId: invitation[0].id,
               answer: update.answer,
            };
         })
      );

      return NextResponse.json(
         {
            status: 201,
            message: 'Answer updated successfully',
            data: updateAnswer,
         },
         {
            status: 201,
         }
      );
   } catch (error) {
      return NextResponse.json({ error: 'Failed to update answer' }, { status: 500 });
   }
}

export async function GET(req: NextRequest, { params }: { params: { guestId: string } }) {
   try {
      const response = await prisma.invitations.findMany({
         select: {
            id: true,
            clientId: true,
            guestId: true,
            questionId: true,
            answer: true,
         },
         where: {
            guestId: Number(params.guestId),
         },
      });

      return NextResponse.json(response, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: 'Failed to get answer' }, { status: 500 });
   }
}
