import React from 'react';

const randomClassname = () => Math.random().toString(36).substr(2, 5);

const createStyles = (styles) => {
    const className = randomClassname();
    const style = document.createElement('style');

    style.innerHTML = `.${className} { ${styles} }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    return className;
}

const styled = {
    div: (strings, ...stylesProps) => {    
        return ({ children, ...componentProps }) => {
            const styles = createStyles(strings, stylesProps.map((func) => func(componentProps)));

            return <div className={styles}>{children}</div>
        }
    },
};

export default styled;