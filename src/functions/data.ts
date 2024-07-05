export async function getData() {
    const response = await fetch('https://strategaperu.com/info.json');
    const data = await response.json();
    return data;
}

export async function getClients() {
    const response = await fetch('https://strategaperu.com/php/clientes.json');
    const data = await response.json();
    return data;
}