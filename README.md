
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
