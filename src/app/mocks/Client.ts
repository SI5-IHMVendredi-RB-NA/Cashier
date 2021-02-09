import { Client } from '../models/Client';
import COMMANDES from './Commande';
const CLIENT: Client =
    {
        id: 2048,
        nom: 'Nouamane',
        commandes: [
            COMMANDES[0], 
            COMMANDES[1]
        ],
        balance: 10
    }

export default CLIENT;
