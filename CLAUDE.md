# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Cloudflare Workers application built with Hono that displays a sumo wrestling (大相撲) ranking system. The app serves both HTML pages and JSON API endpoints for displaying rikishi (sumo wrestler) information.

## Common Commands

### Development
- `npm run dev` - Start local development server using Wrangler
- `npm start` - Alternative command for starting development server

### Testing
- `npm test` - Run tests in watch mode using Vitest
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report

### Build & Deploy
- `npm run build` - Build TypeScript files
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run cf-typegen` - Generate Cloudflare Workers types

## Architecture

### Core Framework
- **Hono**: Web framework for Cloudflare Workers
- **TypeScript**: Primary language with strict type checking
- **Vitest**: Testing framework with Cloudflare Workers pool

### Application Structure
```
src/
├── index.ts         # Main application with Hono routes and rikishi data
└── index.test.ts    # Comprehensive test suite
```

### Key Components
1. **Rikishi Interface**: Defines structure for sumo wrestler data (`name`, `rank`, `wins`, `losses`)
2. **HTML Route** (`/`): Serves styled HTML page displaying sumo rankings
3. **API Route** (`/api/rikishi`): Returns JSON data of all wrestlers
4. **Static Data**: Hardcoded array of current rikishi with their records

### Testing Strategy
Tests use `cloudflare:test` module with `SELF.fetch()` to simulate HTTP requests. Coverage includes:
- Route status codes
- HTML content validation
- JSON API structure
- Error handling (404s)

### Configuration Files
- `wrangler.jsonc`: Cloudflare Workers configuration with observability enabled
- `vitest.config.mts`: Test configuration for Cloudflare Workers environment
- `worker-configuration.d.ts`: Generated TypeScript definitions for Workers runtime