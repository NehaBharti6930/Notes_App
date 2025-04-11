import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		   
		</div>
		
	);


};

const Footer = ({}) => {
	return(
		<div>
	     <footer className="footer">
        <p className="mb-0">© {new Date().getFullYear()} Movie Finder | Built with ❤️ using React & Bootstrap by Neha Bharti</p>
      </footer>


		</div>

	);
};


export default Header;
