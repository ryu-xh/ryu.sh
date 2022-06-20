import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Resume from './views/Resume';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter >
			<Routes>
				<Route path="/resume" element={<Resume />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
