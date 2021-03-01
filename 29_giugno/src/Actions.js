export const ADDSPESA = 'addSpesa';
export const ADDCATEGORIA = 'addCategoria';
export const REMOVESPESA = 'removeSepesa';
export const REMOVECATEGORIA = 'removeCategoria';

export function addSpesa(idCategoria, tipoSpesa, dataSpesa, price) {
    return {type: ADDSPESA, idCategoria, tipoSpesa, dataSpesa, price}
}

export function addCategoria(nomeCategoria) {
    return {type: ADDCATEGORIA, nomeCategoria};
}

export function removeSpesa(id) {
    return {type: REMOVESPESA, id}
}

export function removeCategoria(id){
    return {type: REMOVECATEGORIA, id}
}