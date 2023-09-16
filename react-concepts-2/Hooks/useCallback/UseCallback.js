// useCallback Hook: returns memoized callback function
// useCallback(fn, dependencies)
// useMemo vs useCallback: 
// useMemo returns a memoized value, useCallback returns a memoized function
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) 
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);