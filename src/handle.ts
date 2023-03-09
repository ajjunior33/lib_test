import * as dotenv from 'dotenv'
import { sub } from './services/sub';
import { sum } from './services/sum';

dotenv.config();

const Methods = { 
    sub,
    sum
}
export { Methods }