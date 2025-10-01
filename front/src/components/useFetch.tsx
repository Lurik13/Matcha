export default async function useFetch(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erreur API");
    return await res.json();
  } catch (err) {
    console.error(err);
    return err;
  }
}

