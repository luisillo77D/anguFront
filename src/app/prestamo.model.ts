export interface Prestamo {
    id: number;
        amount: number;
        date: string;
        due_date: string;
        status: boolean
        cliente_id: number;
}
