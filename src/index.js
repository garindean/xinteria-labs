/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      })
    }

    // Basic routing
    switch (url.pathname) {
      case "/":
        return new Response("Xinteria Labs API - Welcome!", {
          headers: {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
          },
        })

      case "/health":
        return Response.json(
          {
            status: "healthy",
            timestamp: new Date().toISOString(),
            service: "xinteria-labs-api",
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          },
        )

      case "/api/contact":
        if (request.method === "POST") {
          try {
            const body = await request.json()
            // Handle contact form submission here
            // You can integrate with email services, databases, etc.

            return Response.json(
              {
                success: true,
                message: "Contact form submitted successfully",
                data: body,
              },
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                },
              },
            )
          } catch (error) {
            return Response.json(
              {
                success: false,
                error: "Invalid JSON payload",
              },
              {
                status: 400,
                headers: {
                  "Access-Control-Allow-Origin": "*",
                },
              },
            )
          }
        }
        break

      default:
        return new Response("Not Found", {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
    }
  },
}
