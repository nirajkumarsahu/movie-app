import React, { Fragment } from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<Fragment>
			{props.movies.map((movie, i) => (
				<div className='image-container d-flex justify-content-start col-md-3 col-sm-3' key={i}>
					<img src={movie.Poster} alt='movie'></img>
					<span className="title"> {movie.Title}  </span>
					{ props.alreadySeenTitle ? <span className="seen" onClick={() => props.handleSeenClick(movie)}> {props.alreadySeenTitle} </span> : ''}
					{props.handleFavouritesClick ?
						<div
							onClick={() => props.handleFavouritesClick(movie)}
							className='overlay d-flex align-items-center justify-content-center'
						>
							<FavouriteComponent />
						</div>
						: ''}
				</div>
			))}
		</Fragment>
	);
};

export default MovieList;
