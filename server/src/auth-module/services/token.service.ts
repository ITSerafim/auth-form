import jwt from 'jsonwebtoken';

class TokenService {
  public static token(payload: string, expiresTime = '24h'): string {
    return jwt.sign(payload, process.env.SECRET_KEY as string, {
      expiresIn: expiresTime,
    });
  }

  public static validate(token: string): string | jwt.JwtPayload {
    return jwt.verify(token, process.env.SECRET_KEY as string);
  }
}

export default TokenService;
