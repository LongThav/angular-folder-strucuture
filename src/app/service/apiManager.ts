import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManager {
    private baseUrl = 'http://3.106.139.121/api/'; // Replace with your base URL

    async fetch(url: string, options: RequestInit = {}): Promise<any> {
        try {
            console.log('Fetching URL:', url, 'with options:', options);
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Fetch result:', result);
            return result;
        } catch (error) {
            console.error("Request error:", error);
            throw error;
        }
    }

    get(end_point: string): Promise<any> {
        return this.fetch(`${this.baseUrl}${end_point}`, { method: 'GET' });
    }

    post<T>(end_point: string, body: any): Promise<T> {
        return this.fetch(`${this.baseUrl}${end_point}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    put(end_point: string, data: any): Promise<any> {
        return this.fetch(`${this.baseUrl}${end_point}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    delete(end_point: string): Promise<any> {
        return this.fetch(`${this.baseUrl}${end_point}`, { method: 'DELETE' });
    }
}
