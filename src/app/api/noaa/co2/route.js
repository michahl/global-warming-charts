import { NextResponse } from 'next/server';

export async function GET() {
    const apiUrl = "https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_gl.csv";

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/csv',
                'User-Agent': 'Mozilla/5.0',
            }
        });

        if (!response.ok) {
            console.error('Fetch error:', response.statusText);
            throw new Error(response.statusText);
        }

        const data = await response.text();
        const parsedData = parseCSV(data);
        const filteredData = parsedData.filter(item => item.year === 1984 && item.month === 12 || item.year >= 1985);
        return NextResponse.json(filteredData);
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const parseCSV = (csv) => {
    const lines = csv.trim().split("\n");
    const headers = lines.find(line => !line.startsWith("#")).split(",");

    return lines
        .filter(line => !line.startsWith("#") && line.trim())  // Ignore comment lines and empty lines
        .slice(1)  // Ignore the headers line itself
        .map(line => {
            const values = line.split(",");
            let jsonObject = {};
            headers.forEach((header, index) => {
                jsonObject[header.trim()] = isNaN(values[index]) ? values[index].trim() : parseFloat(values[index]);
            });
            return jsonObject;
        });
}

const filterData = (data) => {
    return data.filter(item => {
        // Keep only data from 1984 and onwards
        return item.year >= 1984;
    }).reduce((acc, curr) => {
        // Keep the last month of 1984 and all months of 1985 onwards
        if (curr.year === 1984 && curr.month === 12) {
            acc.push(curr);
        } else if (curr.year > 1984) {
            acc.push(curr);
        }
        return acc;
    }, []);
}