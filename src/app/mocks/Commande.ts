import { Commande } from '../models/Commande';
import CLIENT from './Client';
import REPAS from './Repas';
const COMMANDES: Commande[] =
[
    {
        id: 1,
        repas: REPAS[0],
        client: CLIENT
    },
    {
        id: 2,
        repas: REPAS[1],
        client: CLIENT
    }
]


export default COMMANDES;
