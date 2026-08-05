
```markdown
## 🏗 Backend Architecture

The API follows a layered architecture to separate concerns and make the codebase highly testable and maintainable:

1. **Routes (`/routes`)**: Define the API endpoints and attach middleware.
2. **Controllers (`/controllers`)**: Handle incoming HTTP requests, extract parameters, and return HTTP responses.
3. **Services (`/services`)**: Contain the core business logic. Services know nothing about HTTP or the database implementation.
4. **Repositories (`/repositories`)**: Handle all database operations.

### Pluggable Data Access
We use the **Repository Pattern** to easily swap out data sources. The `REPOSITORY_DRIVER` environment variable dictates which repository implementation the services use at runtime:
- **`memory`**: Uses in-memory arrays for fast local testing.
- **`mongodb`**: Connects to a MongoDB database for production.

To add a new database driver (e.g., PostgreSQL), you simply need to create a new folder in `src/repositories/` that implements the same methods as the existing repositories!

## 📁 Project Structure

The repository is divided into two main applications: the frontend portal and the backend API.

```text
Vigilant Test/
├── online-exam-portal/       # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable MUI UI components
│   │   ├── pages/            # Page-level components (Dashboard, Exam, etc.)
│   │   ├── services/         # API integration (Axios)
│   │   └── utils/            # Helper functions (CSV parsing, auth context)
│
└── online-exam-api/          # Node.js + Express Backend
    ├── src/
    │   ├── controllers/      # Route handlers and request validation
    │   ├── services/         # Core business logic
    │   ├── repositories/     # Database interaction (Memory, MongoDB, etc.)
    │   ├── middleware/       # Express middlewares (Auth, Error handling)
    │   └── routes/           # API route definitions


## 🤝 Contributing

We welcome contributions! When adding new features to the API, please adhere to our architectural pattern:
1. Do not write database queries directly in your controllers or services.
2. If you need to fetch or save data, add a method to the appropriate **Repository**.
3. Keep business rules and calculations inside the **Services**.
4. Ensure your new code supports both the `memory` and `mongodb` repository drivers.

