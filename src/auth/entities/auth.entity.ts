import { Business } from 'src/business/entities/business.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int', { unique: true, nullable: false })
  phone: number;

  @Column('text', { nullable: false , select: false})
  password: string;

  @Column({
    type: 'text',
    array: true,
    nullable: false,
    default: ['USER'],
  })
  role: string[];

  @OneToMany(
    ()=> Business,
    (business) => business.user,
    {cascade: true}
  )
  business: Business;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column('boolean', { default: true })
  isActive: boolean;

  // @BeforeInsert()
  // checkEmailBeforeInsert(){
  //   this.email = this.email.toLowerCase().trim();
  //   this.role = this.role.map(role => role.toUpperCase().trim());
  // }

  // @BeforeUpdate()
  // checkEmailBeforeUpdate(){
  //   this.checkEmailBeforeInsert();
  // }
}
