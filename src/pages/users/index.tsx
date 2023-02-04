import React, {useState, useEffect} from 'react';
import {getUsers} from '@/services/user-service';
import DataTable from 'react-data-table-component';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await getUsers();
                setUsers(response.data);
                setFilteredUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleFilter = (e) => {
        const filterValue = e.target.value.toLowerCase();
        setFilteredUsers(
            users.filter((user) => {
                return (
                    user.first_name.toLowerCase().includes(filterValue) ||
                    user.last_name.toLowerCase().includes(filterValue) ||
                    user.email.toLowerCase().includes(filterValue)
                );
            })
        );
    };

    const columns = [
        {
            name: "first_name",
            selector: (row) => row.first_name,
            sortable: true,
        },
        {
            name: "last_name",
            selector: (row) => row.last_name,
            sortable: true,
        },
        {
            name: "email",
            selector: (row) => row.email,
            sortable: true,
        },
    ];

    return (
        <div>
            {error && <div>{error}</div>}
            <input type="text" placeholder="Buscar" onChange={handleFilter}/>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <DataTable
                    title="Usuários"
                    columns={columns}
                    data={filteredUsers}
                />
            )}
        </div>
    );
};

export default UsersPage;