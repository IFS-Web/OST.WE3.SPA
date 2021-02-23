/**
 * Model Part of MVC
 */
export class CounterModel {
    private team = 'unspecified';
    private count = 0;

    constructor(team?: string, count?: number) {
        this.team = (team || this.team);
        this.count = (count || this.count);
    }
    static fromDto(dto: any): CounterModel {
        return new CounterModel(dto.team, dto.count);
    }
}
