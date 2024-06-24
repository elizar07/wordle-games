import React from 'react'
import { useWordle } from '../../hooks/useWordle'
import { Tile } from '../Tile'
import './WordG.css'

const WordG = () => {
	const {
		word,
		isLoading,
		messsage,
		guesses,
		gameOver,
		currentGuesses,
		currentIndex,
		getTileClass,
		initializeGame
	} = useWordle()
	console.log(word)

	return (
		<div className='word-container'>
			<h1>Wordle Games</h1>
			{isLoading ? (
				<p>Загрузка...</p>
			) : (
				<div>
					{Array.from({ length: 6 }, (_, row) => (
						<div key={row} className='row'>
							{Array.from({ length: 5 }, (_, col) => {
								const index = row * 5 + col
								const inputValue = guesses[row][col] || ''
								const tileClass =
									currentIndex > row || gameOver
										? getTileClass(inputValue, col, row)
										: ''
								return (
									<Tile
										key={index}
										index={index}
										inputValue={inputValue}
										tileClass={tileClass}
									/>
								)
							})}
						</div>
					))}
					<div className="you-lost">

					{messsage && (
						<p style={{ color: 'black' }}>Правильное слово: {word}</p>
					)}
					{gameOver && (
						<div>
							<button onClick={initializeGame}>Начать заново</button>
						</div>
					)}
					</div>
				</div>
			)}
		</div>
	)
}

export default WordG
