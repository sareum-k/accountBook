import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Account } from "./Account"
import { Goal } from "./Goal"

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(type => Account, account => account.user)
    account_userId: Account[]
    
    @OneToMany(type => Goal, goal => goal.user)
    goal_userId: Goal[]

    @Column({ type: 'text' })
    password: string

    @Column()
    userName: string

    @Column()
    @CreateDateColumn()
    created_at!: Date

    @Column()
    @UpdateDateColumn()
    updated_at!: Date

}
