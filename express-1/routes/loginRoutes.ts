import {Router, Request, Response, NextFunction} from "express";

const router = Router();


interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined;
    }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not permitted');
}

router.get('/login', (_req: Request, res: Response) => {
    res.send(`
        <form method="post">
            <div>
                <label for="email">Email</label>
                <input type="email" name="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password">
            </div>
            <button type="submit">Submit</button>
        </form>
    `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const {email, password} = req.body;

    if (email && password && email === 'martinezlara_joseeduardo@hotmail.com' && password === '12345678') {
        // mark this person as logged in
        req.session = {loggedIn: true}
        // redirect them to the root route
        res.redirect('/');
    } else {
        res.send('Invalid email or password')
    }
})

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are lgoged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>You are not lgoged in</div>
                <a href="/login">Login</a>
            </div>
        `)
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
})

router.get('/protected', requireAuth, (_req: Request, res: Response) => {
    res.send('Welcome to protecte route, logged in user');
})

export default router;