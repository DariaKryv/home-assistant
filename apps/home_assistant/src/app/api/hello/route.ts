export async function GET(request: Request) {
  const data = await fetch(
    'https://uncommon-obviously-man.ngrok-free.app/api/states',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZWJlNWVmMDEyYTU0YjQ2YjlkYzQzMmZjZjM0NDllYSIsImlhdCI6MTcyNzQ0Njg3MiwiZXhwIjoyMDQyODA2ODcyfQ.rDG4pTb4mzwxBzZ-MHq64WoGZ7MstybeISwfOOHJm3o`,
      },
    }
  );
  const response = await data.json();
  return new Response(JSON.stringify(response));
}
