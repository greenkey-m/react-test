import * as React from 'react';

interface IProps {
    name?: string;
}

const Header: React.FunctionComponent<IProps> = (props: IProps) => (
    <h1>Hello, {props.name}! WelcoScript.</h1>
);

Header.defaultProps = {
    name: 'world',
};

export default Header;