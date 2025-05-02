export async function GET(request: Request) {
  const time = Date.now();
  const MONTH = 1000 * 60 * 60 * 24 * 30;
  const startOffset = MONTH;
  const startTime = new Date(time - startOffset).toISOString();
  const endTime = new Date(time).toISOString();
  const url = `https://uncommon-obviously-man.ngrok-free.app/api/history/period/${startTime}?end_time=${endTime}&filter_entity_id=weather.buienradar&minimal_response`;

  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZWJlNWVmMDEyYTU0YjQ2YjlkYzQzMmZjZjM0NDllYSIsImlhdCI6MTcyNzQ0Njg3MiwiZXhwIjoyMDQyODA2ODcyfQ.rDG4pTb4mzwxBzZ-MHq64WoGZ7MstybeISwfOOHJm3o`,
    },
  });
  const response = await data.json();
  return new Response(JSON.stringify(response));
}
