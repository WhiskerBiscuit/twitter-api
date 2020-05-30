import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

it('renders with tweets', async () => {
    const data = [
        {
            created_at: 'CreatedA',
            text: 'TextA',
            user_name: 'UsernameA',
            user_image: 'https://placekitten.com/200/300',
        },
        {
            created_at: 'CreatedB',
            text: 'TextB',
            user_name: 'UsernameB',
            user_image: 'https://placekitten.com/200/300',
        },
    ];
    global.fetch = jest.fn(() => (Promise.resolve({
        json: () => (Promise.resolve(data)),
    })));

    render(<App/>);
    expect(screen.queryByText('Searching for tweets...')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/get-tweets');
    await waitForElementToBeRemoved(() => screen.queryByText('Searching for tweets...'));
    expect(screen.queryByText('CreatedA')).toBeInTheDocument();
    expect(screen.queryByText('TextA')).toBeInTheDocument();
    expect(screen.queryByText('UsernameA')).toBeInTheDocument();
    expect(screen.queryByAltText('UsernameA')).toBeInTheDocument();
    expect(screen.queryByText('CreatedB')).toBeInTheDocument();
    expect(screen.queryByText('TextB')).toBeInTheDocument();
    expect(screen.queryByText('UsernameB')).toBeInTheDocument();
    expect(screen.queryByAltText('UsernameA')).toBeInTheDocument();
});

it('renders with no tweets', async () => {
    const data = [];
    global.fetch = jest.fn(() => (Promise.resolve({
        json: () => (Promise.resolve(data)),
    })));

    render(<App/>);
    expect(screen.queryByText('Searching for tweets...')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8080/get-tweets');
    await waitForElementToBeRemoved(() => screen.queryByText('Searching for tweets...'));
    expect(screen.queryByText('No tweets found.')).toBeInTheDocument();
});
