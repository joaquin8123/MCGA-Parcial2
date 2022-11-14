import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { createProduct } from '../../redux/Products/thunk';
import { useDispatch } from 'react-redux';

const Product = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        dispatch(createProduct(data))
    }

    const returnProducts = () => {
        history.push('/products')
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-8 p-4'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Crear Producto
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-group'>
                                <label>
                                    Nombre<span className='text-danger'>*</span>
                                </label>
                                <input className='form-control'
                                    placeholder='Nombre' {...register("name", { required: true })} />
                                {errors.name ? <span className='alert alert-danger p-1 m-0 textcenter'>El Nombre es requerido</span> : null}
                            </div>

                            <div className='form-group'>
                                <label>
                                    Precio <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control'
                                    placeholder='price' {...register("price", { required: true })} />
                                {errors.price ? <span className='alert alert-danger p-1 m-0 textcenter'>El Precio es requerido</span> : null}
                            </div>


                            <div className='form-group'>
                                <label>
                                    Stock <span className='text-danger'>*</span>
                                </label>
                                <input className='form-control'
                                    placeholder='Stock' {...register("stock", { required: true })} />
                                {errors.stock ? <span className='alert alert-danger p-1 m-0 textcenter'>El Stock es requerido</span> : null}
                            </div>

                            <div className='form-group text-center'>
                                <span className='font-weight-bold text-danger'>
                                    * Campos Requeridos
                                </span>
                            </div>
                            <div>
                                <input type="submit" className='btn btn-primary font-weight-bold text-uppercase d-inline w-50' value="Crear" />
                                <button type="button" onClick={() => returnProducts()} className='btn btn-info font-weight-bold text-uppercase d-inline w-50'>Volver</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
