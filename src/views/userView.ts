import User from '../models/UsersModel';

export default {
    render(user: User) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            active: user.active,
            created_at: user.created_at,
        }
    },

    renderMany(users: User[]) {
        return users.map(user => this.render(user));
    }
}