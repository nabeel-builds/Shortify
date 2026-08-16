const activeUsers = new Map()
const sseClients = new Set()

const TIMEOUT = 30_000

export function broadcastCount(){
    const payload = `data: ${JSON.stringify({count:activeUsers.size})}\n\n`
    sseClients.forEach((controller) => {
        try{
            controller.enqueue(new TextEncoder().encode(payload))
        }catch{
            sseClients.delete(controller)
        }
    })
}

if (!global._cleanupStarted) {
  global._cleanupStarted = true;
  setInterval(() => {
    const now = Date.now();
    let changed = false;
    activeUsers.forEach((lastSeen, id) => {
      if (now - lastSeen > TIMEOUT) {
        activeUsers.delete(id);
        changed = true;
      }
    });
    if (changed) broadcastCount();
  }, 10_000);
}

export { activeUsers, sseClients };