import * as React from 'react';
import classNames from 'classnames';
import Link from '../Link';

const iconMap = {

};
let c=0;
console.log(global.sessionStorage)

export default function Action(props) {

    const { type, label, altText, url, showIcon,cssId } = props;
    const icon = props.icon || 'arrowLeft';
    const iconPosition = props.iconPosition || 'right';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    let s = global.sessionStorage
    if(global.sessionStorage&&label==='登陆'){
        var b = true
        console.log(s.length)
        c=s.length
    }

    const defaultStyle = type === 'Link' ? 'link' : 'secondary';
    const style = props.style || defaultStyle;
    const cssClasses = props.className || null;
    return (
            <Link
                href={url}
                aria-label={altText}
                id={cssId}
                className={c==2 && b ?'':(classNames(style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
                    'sb-component-button-primary': style === 'primary',
                    'sb-component-button-secondary': style === 'secondary'
                }))}
                // data-sb-field-path={annotations.join(' ').trim()}
            >

                {c==2 && altText==='Sign up' ?'':label && <span>{c==2 && altText==='Sign up'?'':label}</span>}
                {showIcon && IconComponent && (
                    <IconComponent
                        className={classNames('fill-current h-5 w-5', {
                            'order-first': iconPosition === 'left',
                            'mr-1.5': label && iconPosition === 'left',
                            'ml-1.5': label && iconPosition === 'right'
                        })}
                    />
                )}
            </Link>

        );




}
