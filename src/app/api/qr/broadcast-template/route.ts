import logger from '@/libs/logger';
import prisma from '@/libs/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   const { clientId, formData } = await req.json();
   try {
      const client = await prisma.client.findFirst({
         select: {
            id: true,
         },
         where: {
            client_id: clientId,
         },
      });

      const broadcastTemplate = await prisma.qrBroadcastTemplate.findMany({
         where: {
            clientId: Number(client?.id),
         },
      });

      const templateExis = broadcastTemplate.some((template) => template.type === formData.template_type);

      if (templateExis) {
         return NextResponse.json(
            {
               status: 409,
               message: 'Template type already exist',
            },
            { status: 409 }
         );
      }

      const createQrBroadcastTemplate = await prisma.qrBroadcastTemplate.create({
         data: {
            name: formData.template_name,
            type: formData.template_type,
            clientId: Number(client?.id),
            createdAt: new Date(),
         },
      });

      logger.info(`QR Broadcast template created successfully`, {
         data: createQrBroadcastTemplate,
      });

      return NextResponse.json(
         {
            status: 201,
            message: 'QR Broadcast template created successfully',
            data: createQrBroadcastTemplate,
         },
         { status: 201 }
      );
   } catch (error) {
      logger.error(`Error while creating QR Broadcast template`, {
         error: error as Error,
      });
      return NextResponse.json(
         {
            message: error as Error,
         },
         { status: 500 }
      );
   }
}
