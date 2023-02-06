import React from 'react';
function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch(error){
        setError(true);
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch(error){
      setError(true);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  } 

    return {
      item,
      saveItem,
      loading,
      error,
      sincronizeItem
    };
}

export { useLocalStorage };