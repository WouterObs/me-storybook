import styled, { StyledComponent } from "styled-components";

export const StyledButton: StyledComponent<"button", any, {}, never> =
	styled.button({
		// background: 'white',
		fontWeight: "bold",
		border: "0",
		borderRadius: "3em",
		cursor: "pointer",
		display: "inline-block",
		lineHeight: "1",
	});

// const StyledSVG: StyledComponent<"svg", any, {}, never> = styled.svg({
//   display: 'inline-block',
//   verticalAlign: 'top'
// });

// const HeaderH1: StyledComponent<"h1", any, {}, never> = styled.h1({
//   display: 'inline-block',
//   verticalAlign: 'top',
//   fontSize: '20px',
//   fontWeight: 'bold',
//   lineHeight: '1',
//   margin: '6px 0 6px 10px'
// });

// export const DropdownContainer: StyledComponent<"div", any, {}, never> = styled.div({
//   background: 'ghostwhite',

//   display: 'flex',
//   position: 'relative',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '350px',
//   height: '38px',
//   padding: '10px',
//   margin: '5px',
// });

// export const SelectContainerWrap: StyledComponent<"div", any, {}, never> = styled.div({
//   display: 'flex',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
//   width: '100%',
//   height: '100%',
//   minHeight: '38px',
//   minWidth: '115px'
// });

// Adapting based on props
// const DropdownWrap = styled.div((props) => ({
//   background: props.background,
//   height: '50px',
//   width: '50px'
// }));

// export const ControlWrap: StyledComponent<"div", any, {}, never> = styled.div({
//   display: 'flex',
//   // flexDirection: 'column',
//   justifyContent: 'flex-start',
//   alignItems: 'center',
//   width: '100%',
//   height: '100%',
//   minHeight: '38px',
//   minWidth: '115px',
//   borderRadius: '1px solid black',
//   padding: '5px',
//   background: 'grey',
//   color: 'white',
// });
