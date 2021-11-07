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
    if (callbacks.length > index) {
        const style = callbacks[index](values);
        return `${acc}${value}${style}`;
    }
    return `${acc}${value}`;
}, '');

const createElement = (type) => (strings, ...stylesProps) => {
    return ({ children, ...componentProps }) => {
        const resultString = createStyles(strings, stylesProps, componentProps);
        const styles = setStyles(resultString);

        return React.createElement(
            componentProps.hasOwnProperty('as') ? componentProps.as : type,
            { className: styles, ...componentProps },
            children,
        );
    }
}

const styled = {
    p: createElement('p'),
    
    a: createElement('a'),

    h1: createElement('h1'),
    
    div: createElement('div'),
    
    span: createElement('span'),

    button: createElement('button'),

    header: createElement('header'),

    footer: createElement('footer'),
};

export default styled;