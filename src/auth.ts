import cookie from "cookie"
import { supabase } from './utils/supabase';

export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get('cookie') ?? "");
    if (!c.sbat) {
        return null
    }

    const { data: { user } } = await supabase.auth.getUser(c.sbat);
    if (!user || user.role !== "authenticated") {
        return null
    }
    return user
}

export async function isLoggedIn(req: Request) {
    return await getUser(req) != null
}