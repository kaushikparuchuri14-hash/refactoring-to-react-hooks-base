# Refactoring to React Hooks – Polly Dashboard

## Project Overview

This project is a refactoring exercise focused on modernizing a legacy React application by replacing older state management patterns with React Hooks and the Context API. The application displays a dashboard that visualizes time-series data (sales and subscriptions) and demonstrates clean data fetching, reusable logic, and test-driven refactoring.

The primary objective was not to build new features, but to improve architecture, maintainability, and testability while preserving the existing application logic.



## Key Objectives Achieved

* Refactored state management using React Hooks (useState, useReducer, useEffect)
* Built a reusable custom hook for data fetching (`useFetch`)
* Replaced Redux-based patterns with the React Context API
* Created a reusable `DataContextProvider` for global state
* Implemented unit testing using Jest and React Testing Library
* Added functional testing using Cypress
* Improved UI styling without altering business logic or architecture



## Tech Stack

* React (Functional Components + Hooks)
* Context API (Global State Management)
* Fetch API (Data Fetching)
* Mirage JS (Mock API layer)
* Jest (Unit Testing)
* React Testing Library (Component Testing)
* Cypress (End-to-End Testing)
* PropTypes (Type validation)



## Project Architecture

### 1. Custom Hook: `useFetch`

A reusable hook responsible for:

* Managing loading, error, and data state
* Handling API calls
* Encapsulating side effects using `useEffect`
* Using `useReducer` for predictable state transitions

This ensures separation of concerns and improves reusability across components.

### 2. Context API: `DataContextProvider`

The Context Provider centralizes:

* Dataset state
* Loading state
* Error handling
* Endpoint updates

This replaces the need for Redux in a lightweight and scalable way suitable for small to medium applications.

### 3. Component Structure

* `DashboardShell` – Main container and selection logic
* `SummaryContainer` – Displays totals
* `ChartContainer` – Renders chart from dataset
* `LineChart` – Visualization layer

The components are decoupled and consume data via Context instead of prop drilling.



## Data Handling

The project uses mocked API endpoints instead of real backend services, as per the liveProject guidelines.

Expected dataset shape:

```
[
  {
    timestamp: "ISO_STRING",
    amount: number
  }
]
```

Mirage JS is used to simulate API responses for:

* `/api/totals/`
* `/api/sales/`
* `/api/subscriptions/`



## UI Improvements

The UI was modernized with:

* Lighter color palette
* Improved spacing and layout
* Cleaner card design
* Better visual hierarchy

Note: Only styling was enhanced. Core logic and architecture were intentionally left unchanged to preserve the integrity of the refactoring exercise.


## Testing Strategy

### Unit Testing (Jest + React Testing Library)

* Custom hook testing (`useFetch`)
* Component isolation with mocks
* Context provider integration testing

Run tests with coverage:

```
npm test -- --coverage --watchAll=false --runInBand
```

### End-to-End Testing (Cypress)

Cypress tests validate:

* Dashboard loading
* API interception
* Chart selection behavior

Run Cypress:

```
npx cypress open
```

or

```
npx cypress run
```

---

## Setup Instructions

### Prerequisites

* Node.js 18 LTS (recommended for compatibility)
* npm 8+

### Installation

```
npm install
```

### Run Development Server

```
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

### Run Tests

```
npm test
```

### Build for Production

```
npm run build
```



## Refactoring Milestones Completed

1. Managing local state and data fetching with React Hooks
2. Building a custom reusable data-fetching hook
3. Replacing Redux patterns with Context API
4. Adding unit and functional tests
5. Creating a reusable Context Provider and improving code structure



## Professional Notes

* The project intentionally uses mocked endpoints as real APIs were not provided in the original liveProject specification.
* Focus was placed on clean architecture, scalability, and testability.
* All refactoring changes were implemented incrementally with test validation to prevent regressions.

