'use server';

export const toggle = async (state: string) => {
  const x = await fetch(
    'http://192.168.178.202:8123/api/states/switch.shellyplusplugs_d48afc5ada8c_switch_0',
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZWJlNWVmMDEyYTU0YjQ2YjlkYzQzMmZjZjM0NDllYSIsImlhdCI6MTcyNzQ0Njg3MiwiZXhwIjoyMDQyODA2ODcyfQ.rDG4pTb4mzwxBzZ-MHq64WoGZ7MstybeISwfOOHJm3o`,
      },
      method: 'post',
      body: JSON.stringify({ state: state === 'on' ? 'off' : 'on' }),
    }
  );

  console.log('Toggle response:', await x.json());
  return x.json();
};
