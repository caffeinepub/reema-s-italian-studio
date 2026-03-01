import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-neutral-bg">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const lessonsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/lessons', component: Lessons });
const videosRoute = createRoute({ getParentRoute: () => rootRoute, path: '/videos', component: Videos });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });

const routeTree = rootRoute.addChildren([homeRoute, lessonsRoute, videosRoute, aboutRoute, contactRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
