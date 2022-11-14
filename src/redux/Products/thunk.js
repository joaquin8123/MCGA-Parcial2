import Swal from 'sweetalert2';
import {
    setProducts,
    setLoadingProducts,
    dismissLoadingProducts,
    getProductsError,
    deleteProductSuccess,
    getProductDelete
} from './actions'

const BASE_URL = 'http://localhost:4000'

export function getProducts() {
    return async (dispatch) => {
        dispatch( setLoadingProducts() );
        try {
            let response = await fetch(`${BASE_URL}/product`);
            const responseParser = await response.json();
            if(responseParser.data) {
                dispatch(dismissLoadingProducts())
                dispatch( setProducts(responseParser.data) )
            }
        } catch (error) {
            dispatch( getProductsError() )
        }
    }
}

export function deleteProduct(id) {
    return async (dispatch) => {
        try {
            dispatch(getProductDelete());
            const response = await fetch(`${BASE_URL}/product/${id}`, { method: 'DELETE'});
            if(response.status === 204){
                dispatch(deleteProductSuccess(id));
                Swal.fire(
                    "Eliminado",
                    "El producto se elimino correctamente",
                    "success"
                );
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error.',
                text: 'Ocurrio un error al eliminar el producto, intenta de nuevo.',
            });
        }
    }
}

export function editProduct(data, id) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/product/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
            if(response.status === 200 ){
                Swal.fire(
                    "Editado",
                    "El producto se edito correctamente",
                    "success"
                );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error.',
                text: 'Ocurrio un error al editar el producto, intenta de nuevo.',
            });
        }
    }
}
export function createProduct(data) {
    return async (dispatch) => {
        try {
            const response = await fetch(`${BASE_URL}/product`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
            if(response.status === 201){
                Swal.fire(
                    "Creacion",
                    "El producto se creo correctamente",
                    "success"
                );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error.',
                text: 'Ocurrio un error al crear el producto, intenta de nuevo.',
            });
        }
    }
}


