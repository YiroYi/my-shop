export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = productId => {
  return { type: DELETE_PRODUCT, pid: productId };
}

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const url = 'https://rn-myshop-c5afd-default-rtdb.firebaseio.com/products.json'

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        price
      })
    });

    const resData = await response.json();

    console.log(resData);

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.name,
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
      }
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return { type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title: title,
      description: description,
      imageUrl: imageUrl
    }
  };
}
