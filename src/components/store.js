import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';

export const CurrentFilter = atom([]);
export const SortBy = atom('');
export const DisplayStyle = atom('');
export const SearchQuery = atom('');
export const EventIsOngoing = persistentAtom(false);
