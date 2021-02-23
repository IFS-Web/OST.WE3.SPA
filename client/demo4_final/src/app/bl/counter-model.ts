/**
 * Model Part of MVC
 */
export class CounterModel {
    private team = 'unspecified';
    private count = 0;

    constructor(team?: string, count?: number) {
        this.team = (team !== void 0) ? team : this.team;
        this.count = (count !== void 0) ? count : this.count;
    }
    static fromDto(dto: any): CounterModel {
        return new CounterModel(dto.team, dto.count);
    }
}
