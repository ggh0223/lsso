import { Controller, Get, Param, Query, UseGuards, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/user-response.dto';
import { ApiResponseDto } from '../common/dto/api-response.dto';

@ApiTags('관리자 사용자 API')
@Controller('admin/users')
export class AdminUsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiOperation({ summary: '사용자 목록 조회', description: '등록된 모든 사용자 목록을 조회합니다.' })
    @ApiResponse({
        status: 200,
        description: '사용자 목록 조회 성공',
        type: ApiResponseDto,
    })
    async findAll(): Promise<ApiResponseDto<UserResponseDto[]>> {
        try {
            const users = await this.usersService.findAll();
            const userDtos = users.map((user) => new UserResponseDto(user));
            return ApiResponseDto.success(userDtos);
        } catch (error) {
            console.error('Error fetching all users:', error);
            return ApiResponseDto.error('USERS_FETCH_ERROR', '사용자 목록을 조회하는 중 오류가 발생했습니다.');
        }
    }

    @Get('search')
    @ApiOperation({ summary: '사용자 검색', description: '검색 조건에 맞는 사용자 목록을 조회합니다.' })
    @ApiQuery({ name: 'query', description: '검색어 (이름, 이메일, 직원번호, 부서, 직책 등)', required: true })
    @ApiResponse({
        status: 200,
        description: '사용자 검색 성공',
        type: ApiResponseDto,
    })
    async search(@Query('query') query: string): Promise<ApiResponseDto<UserResponseDto[]>> {
        try {
            const users = await this.usersService.searchUsers(query);
            const userDtos = users.map((user) => new UserResponseDto(user));
            return ApiResponseDto.success(userDtos);
        } catch (error) {
            console.error(`Error searching users with query ${query}:`, error);
            return ApiResponseDto.error('USERS_SEARCH_ERROR', '사용자 검색 중 오류가 발생했습니다.');
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '사용자 상세 조회', description: '특정 ID의 사용자 정보를 조회합니다.' })
    @ApiParam({ name: 'id', description: '사용자 ID' })
    @ApiResponse({
        status: 200,
        description: '사용자 상세 조회 성공',
        type: ApiResponseDto,
    })
    @ApiResponse({
        status: 404,
        description: '사용자를 찾을 수 없음',
        type: ApiResponseDto,
    })
    async findOne(@Param('id') id: string): Promise<ApiResponseDto<UserResponseDto>> {
        try {
            const user = await this.usersService.findOne(id);
            if (!user) {
                return ApiResponseDto.error('USER_NOT_FOUND', '해당 ID의 사용자를 찾을 수 없습니다.');
            }
            return ApiResponseDto.success(new UserResponseDto(user));
        } catch (error) {
            if (error instanceof NotFoundException) {
                return ApiResponseDto.error('USER_NOT_FOUND', '해당 ID의 사용자를 찾을 수 없습니다.');
            }
            console.error(`Error fetching user with ID ${id}:`, error);
            return ApiResponseDto.error('USER_FETCH_ERROR', '사용자 정보를 조회하는 중 오류가 발생했습니다.');
        }
    }
}
