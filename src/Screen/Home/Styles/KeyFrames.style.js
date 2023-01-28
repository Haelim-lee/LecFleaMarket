import {keyframes} from 'styled-components';

export const Up = keyframes`
    100% {
		transform: translateY(0);
	}
`;

export const Draw = keyframes`
    100% {
		width: 100%;
	}
`;

export const FedeIn = keyframes`
    from {
		opacity: 0;
	}
	to {
		opacity: 5;
	}
`;