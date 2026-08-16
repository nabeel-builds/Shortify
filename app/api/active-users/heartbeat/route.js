import { NextResponse } from 'next/server';
import { activeUsers } from '@/lib/activeUsersStore';

// POST — heartbeat (user active hai)
export async function POST(req) {
  const { visitorId } = await req.json();

  if (!visitorId) {
    return NextResponse.json({ error: 'visitorId required' }, { status: 400 });
  }

  activeUsers.set(visitorId, Date.now());

  return NextResponse.json({ count: activeUsers.size });
}

// GET — sirf count lo (polling)
export async function GET() {
  return NextResponse.json({ count: activeUsers.size });
}