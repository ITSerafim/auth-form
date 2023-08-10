import { hash, compare } from 'bcrypt';

class HashService {
  public static async hash(value: string, sault = 5): Promise<string> {
    return await hash(value, sault);
  }

  public static async verify(
    value: string,
    hashedValue: string
  ): Promise<boolean> {
    return await compare(value, hashedValue);
  }
}

export default HashService;
