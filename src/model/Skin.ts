
export default class Skin {
    public static fromUUID(UUID: string): Skin {
        return new Skin(UUID);
    }

    protected UUID: string;

    protected constructor(UUID: string) {
        this.UUID = UUID;
    }

    public get faceUrl(): string {
        return "https://crafatar.com/avatars/"+this.UUID;
    }
}