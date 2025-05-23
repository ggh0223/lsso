export declare enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare class LogFilterDto {
    page?: number;
    limit?: number;
    startDate?: Date;
    endDate?: Date;
    method?: string;
    url?: string;
    statusCode?: number;
    host?: string;
    ip?: string;
    system?: string;
    errorsOnly?: boolean;
    sortBy?: string;
    sortDirection?: SortDirection;
}
