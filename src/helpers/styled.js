import React from 'react';

const getRandomClassname = () => `styled-${Math.random().toString(36).substr(2, 5)}`;

const setStyles = (styles) => {
    const className = getRandomClassname();
    const style = document.createElement('style');

    style.innerHTML = `.${className} { ${styles} }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    return className;
};

const createStyles = (strings, callbacks, values) => strings.reduce((acc, value, index) => {
    if(callbacks.length > index) {
        const style = callbacks[index](values);
        return `${acc}${value}${style}`;
    }
    return `${acc}${value}`;
}, '');


const styled = {
    h1: (strings, ...stylesProps) => {    
        return ({ children, ...componentProps }) => {
            const resultString = createStyles(strings, stylesProps, componentProps);
            const styles = setStyles(resultString);

            return <h1 className={styles} {...componentProps}>{children}</h1>
        }
    },

    p: (strings, ...stylesProps) => {    
        return ({ children, ...componentProps }) => {
            const resultString = createStyles(strings, stylesProps, componentProps);
            const styles = setStyles(resultString);

            return <p className={styles} {...componentProps}>{children}</p>
        }
    },

    div: (strings, ...stylesProps) => {    
        return ({ children, ...componentProps }) => {
            const resultString = createStyles(strings, stylesProps, componentProps);
            const styles = setStyles(resultString);

            return <div className={styles} {...componentProps}>{children}</div>
        }
    },
    button: (strings, ...stylesProps) => {    
        return ({ children, ...componentProps }) => {
            const resultString = createStyles(strings, stylesProps, componentProps);
            const styles = setStyles(resultString);

            return <button className={styles} {...componentProps}>{children}</button>
        }
    },
};

export default styled;