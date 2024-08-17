import prisma from '@/libs/prisma';
import { getGuests } from '@/services/guestService';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   const { clientId } = await req.json();
   const token = req.headers.get('authorization');
   const jwtToken = token?.split(' ')[1];
   try {
      const guests = await getGuests(jwtToken as string, clientId);
      return NextResponse.json(guests, { status: guests.status });
   } catch (error) {
      return NextResponse.json({ error: (error as Error).message }, { status: 500 });
   }
}