export async function getData() {
    const response = await fetch('https://strategaperu.com/info.json');
    const data = await response.json();
    return data;
}